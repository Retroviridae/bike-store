class BikeSerializer < ActiveModel::Serializer
  attributes :id, :model, :img, :maker,:url, :price
end
