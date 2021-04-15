class Api::PhotosController < ApplicationController

  def show
    @trail = Trail.find_by(id: params[:id])
      if @trail
          @photos = @trail.photos
          render "api/photos/show"
      else
        render json: ["The trail you are looking for does not exist."], status: 404
      end
  end

end
