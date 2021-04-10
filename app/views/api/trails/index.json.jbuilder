json.set! :trails do 
  @trails.each do |trail|
    json.set! :"#{trail.id}"
  end
end

