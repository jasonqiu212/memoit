class AddUserToTags < ActiveRecord::Migration[6.1]
  def change
    add_reference :tags, :user, null: false, foreign_key: true
  end
end
