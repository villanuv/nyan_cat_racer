class Game < ActiveRecord::Base
  has_many :cats_games
  has_many :cats, :through => :cats_games
end
