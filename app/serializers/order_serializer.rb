class OrderSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip, :cardName, :cardNumber, :cvv, :expiration, :cart, :created_at
  belongs_to :user
end
