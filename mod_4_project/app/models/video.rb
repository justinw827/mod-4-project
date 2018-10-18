class Video < ApplicationRecord
  has_many :comments

  has_many :favorites
  has_many :users, through: :favorites
end
