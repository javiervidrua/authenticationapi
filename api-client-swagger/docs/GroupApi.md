# AuthenticationApi.GroupApi

All URIs are relative to *https://localhost:3443/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupGet**](GroupApi.md#groupGet) | **GET** /group | Retrieve the user's groups
[**groupPost**](GroupApi.md#groupPost) | **POST** /group | Create a group
[**groupidDelete**](GroupApi.md#groupidDelete) | **DELETE** /group/:id | Remove the specified group
[**groupidGet**](GroupApi.md#groupidGet) | **GET** /group/:id | Retrieve the information of the specified group
[**groupidPut**](GroupApi.md#groupidPut) | **PUT** /group/:id | Modify the specified group
[**groupidUserDelete**](GroupApi.md#groupidUserDelete) | **DELETE** /group/:id/user | Remove the specified user from the specified group
[**groupidUserGet**](GroupApi.md#groupidUserGet) | **GET** /group/:id/user | Retrieve the users of the specified group
[**groupidUserPost**](GroupApi.md#groupidUserPost) | **POST** /group/:id/user | Add an user to the specified group
[**groupidUserPut**](GroupApi.md#groupidUserPut) | **PUT** /group/:id/user | Modify the privileges of the specified user in the specified group


<a name="groupGet"></a>
# **groupGet**
> UserGroups groupGet()

Retrieve the user's groups

Let the user retrieve a list of the groups that he belongs to

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.GroupApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserGroups**](UserGroups.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupPost"></a>
# **groupPost**
> GroupName groupPost(group)

Create a group

Let the user create a new group

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.GroupApi();

var group = new AuthenticationApi.GroupName(); // GroupName | Group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupPost(group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**GroupName**](GroupName.md)| Group | 

### Return type

[**GroupName**](GroupName.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupidDelete"></a>
# **groupidDelete**
> GroupName groupidDelete(id)

Remove the specified group

Let the user remove the specified group

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.GroupApi();

var id = null; // Object | Id of the group to remove


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupidDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Id of the group to remove | 

### Return type

[**GroupName**](GroupName.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupidGet"></a>
# **groupidGet**
> GroupData groupidGet(id)

Retrieve the information of the specified group

Let the user retrieve the information of the specified group

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.GroupApi();

var id = null; // Object | Id of the group to retrieve the details of


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupidGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Id of the group to retrieve the details of | 

### Return type

[**GroupData**](GroupData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupidPut"></a>
# **groupidPut**
> GroupName groupidPut(id, group)

Modify the specified group

Let the user modify the details of the specified group

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.GroupApi();

var id = null; // Object | Id of the group to modify

var group = new AuthenticationApi.GroupName(); // GroupName | Group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupidPut(id, group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Id of the group to modify | 
 **group** | [**GroupName**](GroupName.md)| Group | 

### Return type

[**GroupName**](GroupName.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupidUserDelete"></a>
# **groupidUserDelete**
> GroupName groupidUserDelete(id, user)

Remove the specified user from the specified group

Let the user remove an user from the specified group (The user cannot remove itself if he's the only administrator of said group)

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.GroupApi();

var id = null; // Object | Id of the target group

var user = new AuthenticationApi.UserEmail(); // UserEmail | User to remove from the specified group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupidUserDelete(id, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Id of the target group | 
 **user** | [**UserEmail**](UserEmail.md)| User to remove from the specified group | 

### Return type

[**GroupName**](GroupName.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupidUserGet"></a>
# **groupidUserGet**
> GroupUsers groupidUserGet(id)

Retrieve the users of the specified group

Let the user retrieve a list of the users of the specified group

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.GroupApi();

var id = null; // Object | Id of the target group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupidUserGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Id of the target group | 

### Return type

[**GroupUsers**](GroupUsers.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupidUserPost"></a>
# **groupidUserPost**
> UserEmail groupidUserPost(id, user)

Add an user to the specified group

Let the user add another user to the specified group

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.GroupApi();

var id = null; // Object | Id of the target group

var user = new AuthenticationApi.UserEmail(); // UserEmail | User


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupidUserPost(id, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Id of the target group | 
 **user** | [**UserEmail**](UserEmail.md)| User | 

### Return type

[**UserEmail**](UserEmail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupidUserPut"></a>
# **groupidUserPut**
> UserEmail groupidUserPut(id, user)

Modify the privileges of the specified user in the specified group

Let the user modify the privileges of the specified user in the specified group

### Example
```javascript
var AuthenticationApi = require('authentication_api');
var defaultClient = AuthenticationApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new AuthenticationApi.GroupApi();

var id = null; // Object | Id of the target group

var user = new AuthenticationApi.UserPrivileges(); // UserPrivileges | User


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.groupidUserPut(id, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**Object**](.md)| Id of the target group | 
 **user** | [**UserPrivileges**](UserPrivileges.md)| User | 

### Return type

[**UserEmail**](UserEmail.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

