if @trail.reviews.length = 0
  trail_rating = 0
else
  trail_sum = 0
  divisor = 0
  @trail.reviews.each do |review|
    trail_rating += review.rating
    divisor += 1
  end
  trail_rating = trail_sum / divisor
end



json.extract! @trail, :id, :title, :route_coords, :difficulty, :location, :length, :description, :estimated_time, :route_type, :elevation_gain
json.set! :trail_rating, trail_rating