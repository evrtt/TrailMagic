class Trail < ApplicationRecord
  
  validates 
    :title, 
    :route_coords,
    :difficulty,
    :location,
    :length,
    :description,
    :estimated_time,
    presence: true

end
