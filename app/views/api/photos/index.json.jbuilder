@photos.each do |photo|
  json.set! photo.id do 
    json.extract! photo, :id
    json.set! :url, url_for(photo)
  end
end
