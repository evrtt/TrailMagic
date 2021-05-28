class Review < ApplicationRecord

  validates :body, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :trail,
    primary_key: :id,
    foreign_key: :trail_id,
    class_name: :Trail

end
