# Gestión de la Basura - Práctica de Calidad

Proyecto utilizado como Aplicación Bajo Prueba (AUT) para la Práctica #1 de la materia **Gestión de Calidad de Sistemas - SIS-312**.

## Objetivo

Realizar análisis estático del proyecto utilizando SonarQube, identificar problemas de calidad, aplicar mejoras y comparar los resultados antes y después de las correcciones.

## Herramientas

- SonarQube Community Build
- SonarScanner
- Git / GitHub
- Trello

## Configuración de SonarQube

El repositorio incluye el archivo:

`sonar-project.properties`

El análisis puede ejecutarse con:

```powershell
sonar-scanner -D"sonar.host.url=http://localhost:9000" -D"sonar.token=TU_TOKEN"
