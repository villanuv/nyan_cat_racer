post '/game/new' do
  game = Game.new(:completed => false)
  game.cats = [Cat.find_or_create_by_initials(params[:cat_one]), Cat.find_or_create_by_initials(params[:cat_two])]
  game.save
  redirect "/game/#{game.id}"
end

get '/game/:id' do
  @game = Game.find(params[:id])
  @game.start_at = Time.now
  @game.save
  erb :play
end

post '/game/:id/finished' do
  game = Game.find(params[:id])
  game.completed = "true"
  game.winner = params[:winner]
  game.end_at = Time.now
  game.save
end


  # t.string :completed
  # t.time :start_at
  # t.time :end_at
  # t.string :winner

get '/game/:id/result' do
  @game = Game.find(params[:id])
  erb :winner
end
