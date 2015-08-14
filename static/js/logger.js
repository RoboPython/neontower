function Logger(logElement, rows)
{
  this.rows = rows || 3;
  this.logElement = logElement;
}

Logger.prototype.log = function (parts)
{
  var rowElement = document.createElement('p');
  rowElement.classList.add('message');

  for (var i = 0; i < this.rows; i++)
  {
    var part = i < parts.length ? parts[i] : '';

    var partElement = document.createElement('span');
    partElement.classList.add('part');
    partElement.textContent = part;

    rowElement.appendChild(partElement);
  }

  this.logElement.appendChild(rowElement);
}