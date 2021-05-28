class Api::TrailsController < ApplicationController
    def index
    @trails = Trail.all
    if @trails
      unless @trails.empty?
        render "/api/trails/index"
      else 
        render json: ["There aren't any trails."], status: 404
      end
    else 
      render json: ["Something went wrong. Please try again."], status: 500
    end
  end

  def show
    @trail = Trail.find_by(id: params[:id]).includes(:reviews)
    if @trail
      render "/api/trails/show"
    else
      render json: ["We couldn't find the trail you're looking for."], status: 404
    end
  end

  def search
    string = params[:string].upcase
    @trails = Trail.where("UPPER(title) LIKE '%#{string}%'")
    if @trails
      unless @trails.empty?
        render "/api/trails/search"
      else
        render json: ["We couldn't find '#{params[:string]}'"], status: 404
      end
    else
      render json: ["Something went wrong. Please try again"], status: 500
    end
  end
end
