class User < ApplicationRecord
    has_secure_password
    has_many :orders
    validates :username, uniqueness: true
    validates :email, uniqueness: true
    validates :username, presence: true
    validates :email, presence: true
    validates :firstName, presence: true
    validates :lastName, presence: true
  end