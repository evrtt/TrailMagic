@trails.each do |trail|
  json.set! trail.id do
    json.extract! trail, :id, :title, :location
  end
end
