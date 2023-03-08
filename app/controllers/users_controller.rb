class UsersController < ApplicationController
     #skip_before_action :authorization

    def index
        users = User.all
        render json: @current_user, serializer: UsersWithDocsSerializer,
        status: :ok
    end
    def show 
        user = User.find(session[:user_id])
        render json: user, serializer: UsersWithDocsSerializer
    end
    
    def create 
        new_user = User.create!(user_params)
        session[:user_id] = user.id
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

    def me
        render json: @current_user, status: :ok
    end

    private 
    def user_params
        params.permit(:name, :username, :email, :password, :bio, :avatar)
    end
end
