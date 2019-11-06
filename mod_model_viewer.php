<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_model_viewer
 *
 * @copyright   Copyright (C) 2019 Artem Vasilev. All rights reserved.
 * @license     GNU General Public License version 3 or later; see http://www.gnu.org/licenses/gpl-3.0.txt
 */

use Joomla\CMS\Helper\ModuleHelper;

defined('_JEXEC') or die;

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

require ModuleHelper::getLayoutPath('mod_model_viewer', $params->get('layout', 'default'));
