class GreetingsController < ApplicationController
  def random
    @random_greeting = Message.order('RANDOM()').first
    render json: { greeting: greeting&.content }
  end
end
