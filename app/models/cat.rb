class Cat < ActiveRecord::Base
  has_many :cats_games
  has_many :games, :through => :cats_games

  validates :initials, :uniqueness => true
end
