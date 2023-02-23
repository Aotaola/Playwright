class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok
    end
    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
    end
    def create 
        new_user = User.create!(user_params)
        render json: new_user, status: :created
    end
    def update 
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :updated
    end
    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    private 
    def user_params
        params.permit(:name, :username, :email, :password, :bio, :avatar)
    end
end
