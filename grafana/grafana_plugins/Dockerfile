FROM grafana/grafana:8.1.0
# https://hub.docker.com/r/grafana/grafana/tags/

COPY datasources /etc/grafana/provisioning/datasources/
COPY swarmprom_dashboards.yml /etc/grafana/provisioning/dashboards/
COPY dashboards /etc/grafana/dashboards/
COPY plugins /var/lib/grafana/plugins


ENV GF_SECURITY_ADMIN_PASSWORD=admin \
    GF_SECURITY_ADMIN_USER=admin \
    GF_PATHS_PROVISIONING=/etc/grafana/provisioning/ \
    GF_PLUGINS_ENABLE_ALPHA=true \
    GF_PLUGINS_PLUGIN_ADMIN_ENABLED=true \
    GF_PLUGINS_PLUGIN_ADMIN_EXTERNAL_MANAGE_ENABLED=true \
    GF_FEATURE_TOGGLES_NGALERT=true \
    GF_PANELS_ENABLE_ALPHA=true \
    GF_DEFAULT_APP_MODE=development
    
