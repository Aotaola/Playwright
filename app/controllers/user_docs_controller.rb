class UserDocsController < ApplicationController

    def index 
        usersDocs = UserDoc.all
        render json: usersDocs, status: :ok
    end

    def show
        userDoc = UserDoc.find(params[:id])
        render json: userDoc, status: :ok
    end

    def create
        #user = User.find(params[:session[:user_id]])
        #doc = Doc.find(params[:session[:doc_id]])
        newUserDoc = UserDoc.create!(user: @current_user, doc_id: params[:doc_id])
        render json: newUserDoc, status: :created
    end

    private

    def userDoc_params
        params.permit(:user_id, :doc_id)
    end
    
end
