$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$url = "http://localhost:3000"
$chromePaths = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:LocalAppData\Google\Chrome\Application\chrome.exe"
)

function Test-SiteUp {
  param([string]$TargetUrl)

  try {
    $response = Invoke-WebRequest -Uri $TargetUrl -UseBasicParsing -TimeoutSec 2
    return $response.StatusCode -ge 200 -and $response.StatusCode -lt 500
  } catch {
    return $false
  }
}

if (-not (Test-SiteUp -TargetUrl $url)) {
  Start-Process -FilePath "cmd.exe" -WorkingDirectory $root -ArgumentList "/k", "npm run dev"

  for ($i = 0; $i -lt 45; $i++) {
    Start-Sleep -Seconds 1
    if (Test-SiteUp -TargetUrl $url) {
      break
    }
  }
}

$chrome = $chromePaths | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

if ($chrome) {
  Start-Process -FilePath $chrome -ArgumentList $url
} else {
  Start-Process $url
}
