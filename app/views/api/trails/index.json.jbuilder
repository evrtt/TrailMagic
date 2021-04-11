json.set! :trails do 
  @trails.each do |trail|
    json.set! :"#{trail.id}" do 
      json.extract! trail, :id, :title, :route_coords, :difficulty, :location, :length, :estimated_time
    end
  end
end

