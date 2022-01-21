class AddTagToTasks < ActiveRecord::Migration[6.1]
  def change
    add_reference :tasks, :tag, null: false, foreign_key: true
  end
end
