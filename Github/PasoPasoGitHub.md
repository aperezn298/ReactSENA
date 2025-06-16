# Guía paso a paso de GitHub

Esta guía te enseñará cómo utilizar GitHub desde los conceptos básicos hasta operaciones frecuentes como clonar repositorios y subir cambios.

## Índice
1. [Crear cuenta e iniciar sesión](#1-crear-cuenta-e-iniciar-sesión)
2. [Configurar Git en tu computadora](#2-configurar-git-en-tu-computadora)
3. [Clonar un repositorio existente](#3-clonar-un-repositorio-existente)
4. [Realizar cambios y subirlos a GitHub](#4-realizar-cambios-y-subirlos-a-github)
5. [Comandos útiles de Git](#5-comandos-útiles-de-git)

## 1. Crear cuenta e iniciar sesión

### Crear una cuenta en GitHub
1. Ve al sitio web de [GitHub](https://github.com/)
2. Haz clic en "Sign up" (Registrarse) en la esquina superior derecha
3. Completa el formulario con tu correo electrónico, contraseña y nombre de usuario
4. Resuelve el desafío de verificación y haz clic en "Create account"
5. Verifica tu dirección de correo electrónico a través del enlace enviado

### Iniciar sesión en GitHub
1. Ve a [GitHub](https://github.com/)
2. Haz clic en "Sign in" (Iniciar sesión) en la esquina superior derecha
3. Ingresa tu nombre de usuario o correo electrónico y contraseña
4. Haz clic en "Sign in"

## 2. Configurar Git en tu computadora

### Instalar Git
1. Descarga Git desde [git-scm.com](https://git-scm.com/downloads)
2. Ejecuta el instalador y sigue las instrucciones del asistente
3. Acepta la configuración predeterminada a menos que tengas requisitos específicos

### Configurar tu identidad en Git
Abre PowerShell o la terminal y ejecuta:

```powershell
# Configura tu nombre de usuario
git config --global user.name "Tu Nombre"

# Configura tu correo electrónico (usa el mismo correo que usaste para GitHub)
git config --global user.email "tu_email@ejemplo.com"

# Verifica la configuración
git config --list
```

## 3. Clonar un repositorio existente

### Método 1: Clonar desde la línea de comandos
1. Ve al repositorio que deseas clonar en GitHub
2. Haz clic en el botón verde "Code" 
3. Copia la URL del repositorio (HTTPS o SSH)
4. Abre PowerShell o la terminal
5. Navega a la carpeta donde deseas guardar el repositorio:
   ```powershell
   cd ruta/donde/guardar/repositorio
   ```
6. Ejecuta el comando git clone:
   ```powershell
   git clone URL_del_repositorio
   ```

### Método 2: Clonar con GitHub Desktop
1. Instala [GitHub Desktop](https://desktop.github.com/)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "File" > "Clone Repository"
4. Selecciona el repositorio de la lista o pega la URL
5. Elige la ruta donde guardar el repositorio local
6. Haz clic en "Clone"

## 4. Realizar cambios y subirlos a GitHub

### Realizar cambios locales
1. Navega a la carpeta del repositorio clonado:
   ```powershell
   cd nombre-del-repositorio
   ```
2. Realiza los cambios necesarios en los archivos usando tu editor preferido
3. Verifica el estado de los cambios:
   ```powershell
   git status
   ```

### Confirmar los cambios (commit)
1. Añade los archivos modificados al área de preparación:
   ```powershell
   # Para añadir un archivo específico
   git add nombre_archivo
   
   # Para añadir todos los archivos modificados
   git add .
   ```
2. Confirma los cambios con un mensaje descriptivo:
   ```powershell
   git commit -m "Descripción breve de los cambios realizados"
   ```

### Subir los cambios a GitHub (push)
1. Sube tus cambios al repositorio remoto:
   ```powershell
   git push origin nombre_de_la_rama
   ```
   > Nota: Por defecto, la rama principal suele llamarse `main` o `master`

2. Si es la primera vez que haces push, puede solicitar tus credenciales de GitHub

### En caso de conflictos
Si otras personas han modificado los mismos archivos, puedes encontrar conflictos. En ese caso:

1. Actualiza tu repositorio local:
   ```powershell
   git pull origin nombre_de_la_rama
   ```
2. Resuelve los conflictos manualmente en los archivos afectados
3. Añade los archivos resueltos, haz commit y push nuevamente

## 5. Comandos útiles de Git

```powershell
# Ver el estado actual del repositorio
git status

# Ver el historial de commits
git log

# Ver las ramas disponibles
git branch

# Crear una nueva rama
git checkout -b nombre_nueva_rama

# Cambiar a otra rama
git checkout nombre_rama

# Traer cambios del repositorio remoto
git pull

# Ver las diferencias entre archivos modificados
git diff

# Deshacer cambios en un archivo específico
git checkout -- nombre_archivo

# Deshacer el último commit (mantiene los cambios)
git reset --soft HEAD~1

# Crear un archivo .gitignore
echo "archivos_a_ignorar/" > .gitignore
```

## Recursos adicionales
- [Documentación oficial de Git](https://git-scm.com/doc)
- [Documentación de GitHub](https://docs.github.com/)
- [GitHub Learning Lab](https://lab.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

¡Feliz codificación! Si tienes preguntas adicionales, consulta la documentación o busca ayuda en la comunidad de GitHub.
