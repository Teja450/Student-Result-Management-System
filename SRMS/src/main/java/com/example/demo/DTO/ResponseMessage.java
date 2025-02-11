package com.example.demo.DTO;

public class ResponseMessage {
    private boolean success;
    private Object data;
    private String message;

    // Constructors
    public ResponseMessage(boolean success, Object data) {
        this.success = success;
        this.data = data;
    }

    public ResponseMessage(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    // Getters and setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
