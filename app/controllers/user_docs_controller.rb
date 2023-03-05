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
        newUserDoc = UserDoc.create!(userDoc_params)
        render json: newUserDoc, status: :created
    end

    private

    def userDoc_params
        params.permit(:user_id, :doc_id)
    end
    
end
