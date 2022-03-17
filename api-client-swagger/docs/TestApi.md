# AuthenticationApi.TestApi

All URIs are relative to *https://localhost:3443/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testDbGet**](TestApi.md#testDbGet) | **GET** /test/db | Test that the API can connect to the database


<a name="testDbGet"></a>
# **testDbGet**
> Test testDbGet()

Test that the API can connect to the database

Test that the API can connect to the database

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.TestApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testDbGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Test**](Test.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

