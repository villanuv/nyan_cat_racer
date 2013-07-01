class CatsGame < ActiveRecord::Base
  belongs_to :cat
  belongs_to :game
end
