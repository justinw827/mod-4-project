class User < ApplicationRecord
  has_many :comments
  # has_many :vidoes, through: :comments

  has_many :favorites
  has_many :videos, through: :favorites
end
