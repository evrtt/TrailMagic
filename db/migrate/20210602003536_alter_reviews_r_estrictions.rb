class AlterReviewsREstrictions < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :rating, false
    change_column_null :reviews, :body, true
  end
end
