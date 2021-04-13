@trails.each do |trail|
  json.set! trail.id do 
    json.extract! trail, :id, :title, :difficulty, :route_coords, :location, :length, :estimated_time, :description, :elevation_gain, :route_type
  end
end


