class CreateOrders < ActiveRecord::Migration[7.0]
  enable_extension 'hstore'
  def change
    create_table :orders do |t|
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :cardName
      t.string :cardNumber
      t.integer :cvv
      t.string :expiration
      t.hstore :cart
      t.integer :user_id

      t.timestamps
    end
  end
end
