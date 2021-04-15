class Api::PhotosController < ApplicationController

  def show
    @trail = Trail.find_by(id: params[:id])
      if @trail && @trail.photos.attached?
          @photos = @trail.photos
          render "api/photos/show"


      else

      end
  end

end
