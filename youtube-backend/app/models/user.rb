class User < ApplicationRecord
  has_many :comments
  # has_many :vidoes, through: :comments

  has_many :favorites
  has_many :vidoes, through: :favorites
end
