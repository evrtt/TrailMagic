class Api::ReviewsController < ApplicationController

  def update
    @review = Review.find_by(id: params[:id])
    if @review
      if @review.update(review_params)
        render "/api/reviews/show"
      else
        render json: @review.errors.full_messages, status: 400
      end
    else
      render json: ["We couldn't find that review"], status: 404
    end
  end

  def index
    @reviews = Review.where(trail_id: params[:trail_id]).includes(:user)
    if @reviews
      render "/api/reviews/index"
    else
      render json: ["This trail has no reviews"], status: 404
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    if @review
      render "/api/reviews/show"
    else
      render json: ["We couldn't find that review"], status: 404
    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render "/api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review
      @review.destroy
      render "/api/reviews/show"
    else
      render json: ["We couldn't find that review"], status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:id, :body, :rating, :author_id, :trail_id)
  end

end
