class Trail < ApplicationRecord

  validates :title, presence: true
  validates :route_coords, presence: true
  validates :difficulty, presence: true, inclusion: {in: ["hard", "moderate", "easy"]}
  validates :length, presence: true
  validates :location, presence: true
  validates :description, presence: true
  validates :estimated_time, presence: true
  validates :route_type, presence: true, inclusion: {in: ["Out & back", "Loop"]}
  validates :elevation_gain, presence: true

  has_many_attached :photos

  has_many :reviews
    primary_key: :id,
    foreign_key: :trail_id,
    class_name: :Review
  
end
