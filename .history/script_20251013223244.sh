
# variables - edit these
RG="ftl1-rg"
LOC="eastus"
PREFIX="ftl1prod"    # used for names
ACR_NAME="${ftl1}acr"           # must be globally unique
APP_SERVICE_PLAN="${PREFIX}-plan"
WEBAPP_NAME="${PREFIX}-server"    # must be globally unique
STATIC_APP_NAME="${PREFIX}-static" # must be globally unique
KV_NAME="${PREFIX}-kv"            # key vault name
COSMOS_NAME="${PREFIX}-cosmos"    # optional if using Cosmos
