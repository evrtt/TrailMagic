@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :id, :body, :rating, :author_id, :trail_id, :created_at, :updated_at
    json.set! :author_name, review.user.username
  end
end