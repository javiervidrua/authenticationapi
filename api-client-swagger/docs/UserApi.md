# AuthenticationApi.UserApi

All URIs are relative to *https://localhost:3443/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userDelete**](UserApi.md#userDelete) | **DELETE** /user | Delete the user's data
[**userGet**](UserApi.md#userGet) | **GET** /user | Retrieve the user's data
[**userPut**](UserApi.md#userPut) | **PUT** /user | Update the user's data


<a name="userDelete"></a>
# **userDelete**
> UserData userDelete(password)

Delete the user's data

Let the user delete his data

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.UserApi();

var password = new AuthenticationApi.UserPassword(); // UserPassword | User's password


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userDelete(password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | [**UserPassword**](UserPassword.md)| User's password | 

### Return type

[**UserData**](UserData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userGet"></a>
# **userGet**
> UserData userGet()

Retrieve the user's data

Let the user retrieve his data

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserData**](UserData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userPut"></a>
# **userPut**
> UserData userPut(user)

Update the user's data

Let the user update his data

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.UserApi();

var user = new AuthenticationApi.UserPut(); // UserPut | User's new data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPut(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**UserPut**](UserPut.md)| User's new data | 

### Return type

[**UserData**](UserData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

