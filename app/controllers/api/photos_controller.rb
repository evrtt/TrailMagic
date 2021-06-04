class Api::PhotosController < ApplicationController

  def index
    @trail = Trail.find_by(id: params[:trail_id])
      if @trail
          @photos = @trail.photos
          render "/api/photos/index"
      else
        render json: ["The trail you are looking for does not exist."], status: 404
      end
  end

  def create
    @trail = Trail.find_by(id: params[:trail_id])
      if @trail
        @trail.photos.attach(params[:photo])
        @photo = @trail.photos.last
        render "/api/photos/show"
      else
        render json: ["The trail you are looking for does not exist."], status: 404
      end
  end

  def destroy
    @trail = Trail.find_by(id: params[:trail_id])
      if @trail
        @photo = @trail.photos.find_by(id: params[:id])
        if @photo
          @photo.purge
          render "/api/photos/show"
        else
          render json: ["We couldn't find the photo you are looking for"], status: 404
        end
      else
        render json: ["The trail you are looking for does not exist."], status: 404
      end
  end

end
