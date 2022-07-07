class Order < ApplicationRecord
    belongs_to :user
    validates :cart, presence: true
end
