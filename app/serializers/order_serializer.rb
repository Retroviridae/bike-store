class OrderSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip, :cardName, :cardNumber, :cvv, :expiration, :cart
end
