class CreateBikes < ActiveRecord::Migration[7.0]
  def change
    create_table :bikes do |t|
      t.string :model
      t.string :img
      t.string :maker
      t.string :url
      t.integer :price

      t.timestamps
    end
  end
end
