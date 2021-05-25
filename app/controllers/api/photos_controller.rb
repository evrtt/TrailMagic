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

end
