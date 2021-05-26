import React from 'react';
import MapContainer from '../map/mapbox_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCameraRetro, 
  faDirections, 
  faMapMarkerAlt, 
  faPrint,
  faMapSigns,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import TrailPhotosContainer from './trail_photos_container';
import { StaticMap } from 'react-map-gl';
import TrailIndexContainer from '../trails/trail_index_container';
import { Link } from 'react-router-dom';
import TrailReviewsContainer from '../reviews/reviews_container'

class Trail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mapView: false,
      input: '',
      trails: [],
      errors: '',
      prefix: 'hidden'
    }

    this.search = this.search.bind(this);
    this.hideSearchList = this.hideSearchList.bind(this);
    this.linkToTrail = this.linkToTrail.bind(this);
  }

  componentDidMount() { 
      this.props.fetchAllTrails();
      this.props.fetchTrailPhotos(this.props.currentTrail);
      this.props.switchToReviews();
      window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.clearTrailPhotos();
  }

  hideSearchList() {
    return (
      this.setState({
        prefix: 'hidden',
        input: '',
        trails: [],
        errors: ''
      })
    )
  }

  switchTrails(trailId) {
    return (
      () => {
        this.props.switchToReviews();
        this.props.clearTrailReviews();
        this.props.fetchTrailReviews(trailId);
        this.props.clearTrailPhotos();
        this.props.fetchTrailPhotos(trailId);
        window.scrollTo(0, 0);
        this.hideSearchList();
      }
    )
  }

  linkToTrail() {
    return (
      e => {
        e.preventDefault()
        if (this.state.trails.length === 0) {
          this.setState({
            errors: 'Please search for a valid trail',
            prefix: 'visible'
          })
        } else if (this.state.errors === '') {
          this.setState({
            errors: 'Please search for a valid trail',
            prefix: 'visible'
          })
        } else {
          this.props.history.push(`/trails/${this.state.trails[0].id}`)
        }
      }
    )
  }

  search() {
    return (
      e => {
        e.preventDefault();
        this.setState({
          input: e.currentTarget.value
        })
        if (this.state.prefix === 'hidden') {
          this.setState({
            prefix: 'visible',
          })
        }
        console.log(this.props.searchTrails)
        this.props.searchTrails(e.currentTarget.value)
          .then(
            res => {
              this.setState({ trails: Object.values(res) })
              this.setState({ errors: '' })
            },
            err => {
              this.setState({ trails: [] })
              this.setState({ errors: err.responseJSON })
            }
          )
      }
    )
  }

  render () {
    let searchList;
    if (this.state.errors === '') {
      searchList =
        <ul>
          {this.state.trails.map(trail => {
            return (
              <Link
                className={`${this.state.prefix}-trailpage-search-link`}
                key={`trail-page-search-${trail.id}`}
                to={`/trails/${trail.id}`}
                onClick={this.switchTrails(trail.id)}
              >
                <FontAwesomeIcon
                  icon={faMapSigns}
                  className={`${this.state.prefix}-trailpage-search-icon`}
                />
                <div className={`${this.state.prefix}-trailpage-search-link-content`}>
                  <h5>{trail.title}</h5>
                  <p>{trail.location}</p>
                </div>
              </Link>
            )
          })}
        </ul>
    } else {
      searchList = <div className={`${this.state.prefix}-trailpage-search-errors`}>
        <div className={`${this.state.prefix}-trailpage-search-error-li`}>
          {`${this.state.errors}`}
        </div>
      </div>
    }
    let toggledcontent;
    let reviewsBtn;
    let photosBtn;
    if (this.props.reviewsOrPhotos === "reviews") {
      toggledcontent = "reviews-content"
      reviewsBtn = "content-left-nav-selected"
      photosBtn = "nothing"
    } else {
      toggledcontent = "photos-content"
      reviewsBtn = "nothing"
      photosBtn = "content-left-nav-selected"    
    }
    if (this.props.trail === undefined) {
      return <div></div>
    } else {
      let prefix;
      if (this.state.mapView) {
      return <div></div>
      } else if (!this.state.mapView) {
        prefix = "standard-view"
        return (
          <div 
            className={`${prefix}-grey-background`}
            onClick={this.hideSearchList}
          >
            <div className={`${prefix}-trail-page-no-map`}>
              <nav className={`${prefix}-trail-page-nav`}>
                <div 
                  className={`${prefix}-nav-spans`}
                  onClick={this.hideSearchList}
                >
                  {this.props.trail.location.split(',').map( el =>
                    <span>{el.toString()}</span>
                  )}
                </div>
                <div 
                  className="trailpage-search-container"
                  onClick={e => e.stopPropagation()}
                >
                  <form>
                    <input 
                      type="text"
                      value={this.state.input}
                      placeholder="Search by trail name"
                      onChange={this.search()}
                    />
                    <button
                      onClick={this.linkToTrail()}
                    >
                      <FontAwesomeIcon icon={faSearch}/>
                    </button>
                  </form>
                  <div className={`${this.state.prefix}-trailpage-search-list`}>
                    {searchList}
                  </div>
                </div>
              </nav>
              <div 
                className={`${prefix}-trail-page-header`}
                style={{ 
                  backgroundImage: `url(${this.props.trail.mainPhotoURL})`, 
                  backgroundSize: "cover",
                  backgroundPosition: "center top 50%",
                  backgroundRepeat: "no-repeat"
                }}
                onClick={this.hideSearchList}
              >
                <div className={`${prefix}-trail-page-header-content`}>
                  <h1>{this.props.trail.title}</h1>
                  <p className={`${prefix}-dif-${this.props.trail.difficulty}`}>{this.props.trail.difficulty}</p>
                  <p className={`${prefix}-trail-location`}>{this.props.trail.location.split(",")[0].toString()}</p>
                </div>
              </div>
              <div 
                className={`${prefix}-green-bar`}
                onClick={this.hideSearchList}
              >
              </div>
              <div 
                className={`${prefix}-trail-page-content`}
                onClick={this.hideSearchList}
              >
                <div className={`${prefix}-trail-page-content-left`}>
                  <p className={`${prefix}-description`}>{this.props.trail.description}</p>
                  <div className={`${prefix}-content-spans`}>
                    <div>
                      <p>Length</p>
                      <span> {this.props.trail.length} Mi</span>
                    </div>
                    <div>
                      <p>Elevation gain</p>
                      <span>{this.props.trail.elevationGain}</span>
                    </div>
                    <div>
                      <p>Route type</p>
                      <span>{this.props.trail.routeType}</span>
                    </div>
                  </div>
                  <nav className={`${prefix}-content-left-nav`}>
                    <button 
                      className={`${prefix}-${reviewsBtn}`}
                      onClick={this.props.switchToReviews}
                    >{`Reviews(${this.props.reviewsCount})`}</button>
                    <button 
                      className={`${prefix}-${photosBtn}`}
                      onClick={this.props.switchToPhotos}
                    >{`Photos(${this.props.photosCount})`}</button>
                  </nav>
                  <div className={`${prefix}-${this.props.reviewsOrPhotos}-content`}>
                    {this.props.reviewsOrPhotos === "reviews" ? (
                      <TrailReviewsContainer 
                        prefix={prefix}
                        trailId={this.props.trail.id}
                        visible={"visible"}
                      />
                    ) : (
                      <TrailReviewsContainer
                        prefix={prefix}
                        trailId={this.props.trail.id}
                        visible={"hidden"}
                      />
                    )}
                    {this.props.reviewsOrPhotos === "photos" ? (
                      <TrailPhotosContainer 
                        prefix={prefix} 
                        trailId={this.props.trail.id}
                        visible={"visible"}
                      />
                      ) : (
                      <TrailPhotosContainer 
                        prefix={prefix} 
                        trailId={this.props.trail.id}
                        visible={"hidden"}
                      />                      
                    )}
                  </div>
                </div>
                <div className={`${prefix}-trail-page-content-right`}>
                  <div className={`${prefix}-static-map`}>
                    <StaticMap 
                      width="100%"
                      height="100%"
                      latitude={this.props.trail.routeCoords[0][0]}
                      longitude={this.props.trail.routeCoords[0][1]}
                      zoom={12}
                      mapStyle="mapbox://styles/mapbox/outdoors-v11"
                      mapboxApiAccessToken={window.mapAPIKey}
                    />
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={{position: 'relative', top: "-55%", left: '47%', color: "blue"}}
                    />
                  </div>
                  {this.props.trails.map}
                  <div>
                    <TrailIndexContainer from="sidebar" currentTrailId={this.props.currentTrail}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }  
  }
}

export default Trail;