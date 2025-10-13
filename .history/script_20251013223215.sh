
# variables - edit these
RG="-rg"
LOC="eastus"
PREFIX="l1prod"    # used for names
ACR_NAME="${PREFIX}acr"           # must be globally unique
APP_SERVICE_PLAN="${PREFIX}-plan"
WEBAPP_NAME="${PREFIX}-server"    # must be globally unique
STATIC_APP_NAME="${PREFIX}-static" # must be globally unique
KV_NAME="${PREFIX}-kv"            # key vault name
COSMOS_NAME="${PREFIX}-cosmos"    # optional if using Cosmos
