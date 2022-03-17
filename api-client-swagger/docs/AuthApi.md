# AuthenticationApi.AuthApi

All URIs are relative to *https://localhost:3443/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authRecoverpasswordPost**](AuthApi.md#authRecoverpasswordPost) | **POST** /auth/recoverpassword | User password recovery
[**authSetpasswordPost**](AuthApi.md#authSetpasswordPost) | **POST** /auth/setpassword | User password set
[**authSigninPost**](AuthApi.md#authSigninPost) | **POST** /auth/signin | User sign in
[**authSignoutPost**](AuthApi.md#authSignoutPost) | **POST** /auth/signout | User sign out
[**authSignupPost**](AuthApi.md#authSignupPost) | **POST** /auth/signup | User sign up
[**authSignupVerifyGet**](AuthApi.md#authSignupVerifyGet) | **GET** /auth/signup/verify | User sign up verification


<a name="authRecoverpasswordPost"></a>
# **authRecoverpasswordPost**
> UserEmail authRecoverpasswordPost(email)

User password recovery

Let the user start the password recovery process

### Example
```javascript
var AuthenticationApi = require('authentication_api');

var apiInstance = new AuthenticationApi.AuthApi();

var email = new AuthenticationApi.UserEmail(); // UserEmail | User email to send the verification link to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authRecoverpasswordPost(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**UserEmail**](UserEmail.md)| User email to send the verification link to | 

### Return type

[**UserEmail**](UserEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authSetpasswordPost"></a>
# **authSetpasswordPost**
> UserEmail authSetpasswordPost(token, password)

User password set

Let the user set the password

### Example
```javascript
var AuthenticationApi = require('authentication_api');

var apiInstance = new AuthenticationApi.AuthApi();

var token = null; // Object | Token to verify the password set of the user

var password = new AuthenticationApi.UserPassword(); // UserPassword | New user password


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authSetpasswordPost(token, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**Object**](.md)| Token to verify the password set of the user | 
 **password** | [**UserPassword**](UserPassword.md)| New user password | 

### Return type

[**UserEmail**](UserEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authSigninPost"></a>
# **authSigninPost**
> UserEmail authSigninPost(user)

User sign in

Sign the user in to the system

### Example
```javascript
var AuthenticationApi = require('authentication_api');

var apiInstance = new AuthenticationApi.AuthApi();

var user = new AuthenticationApi.AuthSignin(); // AuthSignin | Credentials to use to sign in


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authSigninPost(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**AuthSignin**](AuthSignin.md)| Credentials to use to sign in | 

### Return type

[**UserEmail**](UserEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authSignoutPost"></a>
# **authSignoutPost**
> UserEmail authSignoutPost()

User sign out

Sign the user out of the system

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authSignoutPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserEmail**](UserEmail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authSignupPost"></a>
# **authSignupPost**
> UserEmail authSignupPost(user)

User sign up

Sign the user up in the system

### Example
```javascript
var AuthenticationApi = require('authentication_api');

var apiInstance = new AuthenticationApi.AuthApi();

var user = new AuthenticationApi.AuthSignup(); // AuthSignup | User data to use to sign up


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authSignupPost(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**AuthSignup**](AuthSignup.md)| User data to use to sign up | 

### Return type

[**UserEmail**](UserEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authSignupVerifyGet"></a>
# **authSignupVerifyGet**
> UserEmail authSignupVerifyGet(token)

User sign up verification

Verify the sign up of the user in the system

### Example
```javascript
var AuthenticationApi = require('authentication_api');

var apiInstance = new AuthenticationApi.AuthApi();

var token = null; // Object | Token to verify the sign up of the user in the system


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authSignupVerifyGet(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**Object**](.md)| Token to verify the sign up of the user in the system | 

### Return type

[**UserEmail**](UserEmail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

