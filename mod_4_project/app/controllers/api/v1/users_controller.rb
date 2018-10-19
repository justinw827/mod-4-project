class Api::V1::UsersController < ApplicationController
  def login
    @user = User.all.first

    render json: @user, status: :ok
  end
end
