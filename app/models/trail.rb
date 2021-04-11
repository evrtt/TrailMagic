class Trail < ApplicationRecord

  validates :title, presence: true
  validates :route_coords, presence: true
  validates :difficulty, presence: true, inclusion: {in: ["hard", "moderate", "easy"]}
  validates :length, presence: true
  validates :location, presence: true
  validates :description, presence: true
  validates :estimated_time, presence: true

  has_many_attached :photos
  
end
